(ns chutesnrackers.core
  (:require [clojure.string :as s]
            [figwheel.client :as fw]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)
(println "Let's play Chutes 'n' Rackers!")

;; Adults wanna learn, but they don't wanna be taught!

(def square-px 80)
(def gutter-width 110)

(def rows 5)
(def cols 8)
(def grid-squares (* rows cols))

(def colors ["red" "yellow" "green" "teal" "blue" "purple"])
(def values ["Fanatical Support® in all we do"
             "Results first, substance over flash"
             "Committed to Greatness"
             "Full Disclosure and Transparency"
             "Passion for our Work"
             "Treat fellow Rackers like Friends and Family"])
(def defining
  ["You're not sure how to solve this problem, but you leverage your teammates and they help you forward."
   "A new fellow Racker is struggling, but you help them by leading by example."
   "You get a weird e-mail from a customer. They seem upset, but you leverage your relationship with them to ensure them you're going to own the problem."
   "A fellow Racker makes a call, but you're not sure it's the right one. You take it to them, and thanks to your relationship built on trust and respect, you work out the differences."
   "You're asked to temporarily help out another team. Because you're acutely aware of your own strengths, you can find a perfect way to help them acchieve the common goal."
   "You manage to get the customer's service to a pretty decent level, but you decide to go the extra mile."
   "Some customer credentials weren't handled securely. We immediately collaborate to simultaneously rectify the problem and contact Incident Management."
   "You see a feature that you know is almost done, but isn't quite right. You keep at it until it's exactly what it needs to be."
   "A Racker gives you some pretty hefty criticism, but you try to interpret it constructively, and assume they mean well."
   "A Racker is struggling. You go talk to them and see if there's a way you can help them be the best Racker they can be."
   "You're not doing well. A Racker has an honest conversation with you about your performance, and helps you find ways to improve."
   "You're done implementing a feature, and you know it's a little janky. You keep owning that result, even after the product has shipped."])
(def defecting
  ["A customer is upset because we failed to meet their expectations. Unfortunately, we overpromised what we'd be able to do for them."
   "You work on an irrelevant detail for a while. You know it doesn't matter, but who cares? At least your boss sees you working, right?"
   "You come up with a solution to a customer problem in a brainstorming session, but a fellow Racker shuts you down in front of the team."
   "A coworker comes up with what you feel is a hare-brained scheme. You rip into them without considering the consequences of your actions."
   "The team has had a few failures, but nothing is being done, and no-one is accountable. You don't speak up, because you might get in trouble."
   "A Racker previously used the same tools you are now and didn't put them back in order. You can't do your job because of it."
   "We had a serious security problem, but no-one else knows yet. If we just keep it to ourselves, we'll be fine."
   "You know that this isn't the best solution, but it's the solution that lets you go home five minutes from now. You sell it to the customer anyway."
   "You try to be everything to everyone, but some of those behaviors just don't match up with your strengths."])

(def values-by-color (zipmap colors values))

(def faces
  (map #(str "img/face-" % ".png") (range 5)))

(def square-types
  "Square types, frequency weighted by probability."
  [nil nil nil nil :chute :chute :racker])

(defn img-attrs
  [square-type]
  (condp = square-type
    :chute (rand-nth [#js {:src "img/hole.png"
                           :style #js {:top "45px" :left "5px"}}
                      #js {:src "img/warning.png"
                           :style #js {:top "30px" :left "20px"}}
                      #js {:src "img/cone.png"
                           :style #js {:top "30px" :left "20px"}}])
    :racker #js {:src "img/rackspace.png"
                 :style #js {:top "30px" :left "18px"}}
    nil nil))

(defn initial-state
  []
  {:i (dec grid-squares)
   :value nil
   :peon-img (rand-nth faces)
   :squares (for [i (range grid-squares)]
              (let [color (rand-nth colors)
                    square-type (when-not (#{0 (dec grid-squares)} i)
                                  (rand-nth square-types))]
                {:i i
                 :color color
                 :value (values-by-color color)
                 :square-type square-type
                 :img-attrs (img-attrs square-type)}))
   :messages '("You start your day at the Rack.")})

(defonce app-state
  (atom (initial-state)))

(defn grid-loc
  [i]
  (let [col (mod i cols)
        row (int (/ i cols))]
    [col row]))

(defn pixel-loc
  [[col row]]
  (let [x (* col square-px)
        y (+ (* row square-px)
             (* row gutter-width))]
    [x y]))

(defn position-style
  [i]
  (let [[x y] (pixel-loc (grid-loc i))]
    #js {:left x :top y}))

(defn in-between-style
  [below-row & center]
  (let [col (if center
              3.5
              (if (= (mod below-row 2) 0) (dec cols) 0))
        [x y] (pixel-loc [col below-row])
        y (+ y square-px)]
    #js {:left x :top y}))

(defn grid-square
  [{i :i color :color square-type :square-type img-attrs :img-attrs}]
  (dom/div #js {:className (s/join " " ["grid-square" color])
                :style (position-style i)
                :id (str "grid-square-" i)}
           (dom/div #js {:style #js {:color "#888"
                                     :top "1px"
                                     :left "12px"}}
                    (if (= i 0)
                      "Goal"
                      (str i)))
           (when img-attrs
             (dom/img img-attrs))))

(defn peon
  [i img]
  (dom/img #js {:className "peon"
                :src img
                :style (position-style i)}))

(def happy-customer
  (dom/img #js {:className "happy-customer"
                :src "img/happy-customer.png"
                :style (position-style 0)}))

(defn in-between-decoration
  [n img-name]
  (let [style (in-between-style n)]
    (dom/img #js {:src (str "img/" img-name ".png")
                  :style style})))

(defn in-between-arrow
  [n img-name]
  (dom/img #js {:src (str "img/" img-name ".png")
                :style (in-between-style n true)}))

(defn grid
  [app]
  (apply dom/div #js {:className "grid"}
         (concat (map grid-square (:squares app))
                 [(peon (:i app) (:peon-img app))
                  happy-customer]
                 (map-indexed in-between-decoration
                              ["walk"
                               "restroom"
                               "lunch"
                               "coffee"])
                 (map-indexed in-between-arrow
                              (take rows (cycle ["long-left-arrow"
                                                 "long-right-arrow"]))))))

(defn values-list
  [app]
  (apply dom/ul nil
         (for [[color value] values-by-color]
           (let [classes (if (= (:value app) value)
                             [color "highlight"]
                             [color])]
             (dom/li #js {:className (s/join " " classes)}
                     (dom/span nil value))))))

(defn move-msg
  [curr-i i]
  (if (= curr-i i)
    "You stay where you are."
    (let [move (if (< curr-i i) "go back" "advance")]
      (str "You " move " from square " curr-i " to " i "."))))

(defn teleport
  "Possibly get teleported by a chute or Racker."
  [{curr-i :i squares :squares :as state}]
  (let [square-type (:square-type (nth squares curr-i))
        _ (println square-type)]
    (if square-type
      (let [[i msg] (condp = square-type
                      :chute [(+ (rand-int (- grid-squares curr-i))
                                 curr-i)
                              (rand-nth defecting)]
                      :racker [(rand-int curr-i)
                               (rand-nth defining)])
            msg (str msg)]
        (-> state
            (assoc :i i)
            (update :messages conj (s/join " " [msg (move-msg curr-i i)]))))
      state)))

(defn roll
  [state]
  (let [curr-i (:i state)
        new-value (rand-nth values)
        squares-to-go (reverse (take curr-i (:squares state)))
        next-square (first (filter #(= (:value %) new-value) squares-to-go))
        next-i (or (:i next-square) curr-i)
        msg (if (= next-i 0)
              "The customer is amazed by your fanatical support! Way to go!"
              (if (= curr-i next-i)
                (str new-value " is a great core value, but it's not going to "
                     "be enough by itself in this situation. Keep trying, "
                     "you're close!")
                (move-msg curr-i next-i)))]
    (-> state
        (assoc :value new-value)
        (assoc :i next-i)
        (update :messages conj msg)
        (teleport))))

(defn messages-list
  [app]
  (apply dom/ul
         nil
         (for [m (:messages app)]
           (dom/li nil m))))

(defn steps-to-go-msg
  [i]
  (cond
    (= i 0) (str "Awesome! ☺")
    (= i 1) (str "Just one more step!")
    :else (let [motivational (condp <= (/ i grid-squares)
                               .8 "Just warming up!"
                               .5 "Keep it up!"
                               .3 "You're doing great!"
                               0 "Almost there!")]
            (str i " steps to go. " motivational))))

(defn hud
  [app]
  (dom/div #js {:className "hud"}
           (dom/span nil (steps-to-go-msg (:i app)))
           (values-list app)
           (dom/button #js {:disabled (= (:i app) 0)
                            :onClick #(om/transact! app roll)}
                       "Let's go!")
           (dom/button #js {:onClick #(om/update! app (initial-state))}
                       "Another day, another racker")
           (messages-list app)))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/div #js {:className "container"}
                 (grid app)
                 (hud app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

(fw/start {
  :on-jsload (fn []
               ;; (stop-and-start-my app)
               )})
