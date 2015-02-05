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
(def values ["Fanatical Support® in all we do."
             "Results first, substance over flash."
             "Committed to Greatness"
             "Full Disclosure and Transparency"
             "Passion for our Work"
             "Treat fellow Rackers like Friends and Family"])
(def values-by-color (zipmap colors values))

(def faces
  (map #(str "img/face-" % ".png") (range 5)))

(def square-types
  "Square types, frequency weighted by probability."
  [nil nil nil nil :chute :chute :racker])

(defn img-attrs
  [square-type]
  (condp = square-type
    :chute #js {:src "img/hole.png"
                :style #js {:top "45px" :left "5px"}}
    :racker #js {:src "img/rackspace.png"}
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

(defn grid-square
  [{i :i color :color square-type :square-type img-attrs :img-attrs}]
  (dom/div #js {:className (s/join " " ["grid-square" color])
                :style (position-style i)
                :id (str "grid-square-" i)}
           (dom/div #js {:style #js {:color "#888"
                                     :top "3px"
                                     :left "16px"}}
                     (str i))
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

(defn grid
  [app]
  (apply dom/div #js {:className "grid"}
         (conj (map grid-square (:squares app))
               (peon (:i app) (:peon-img app))
               happy-customer)))

(defn values-list
  [app]
  (apply dom/ul nil
         (for [[color value] values-by-color]
           (let [classes (if (= (:value app) value)
                             [color "highlight"]
                             [color])]
             (dom/li #js {:className (s/join " " classes)}
                     (dom/span nil value))))))

(defn teleport
  "Possibly get teleported by a chute or Racker."
  [{curr-i :i squares :squares :as state}]
  (let [square-type (:square-type (nth squares curr-i))
        _ (println square-type)]
    (if square-type
      (let [[i msg] (condp = square-type
                      :chute [(+ (rand-int (- grid-squares curr-i))
                                 curr-i)
                              "You fall down."]
                      :racker [(rand-int curr-i)
                               "You get helped up."])]
        (-> state
            (assoc :i i)
            (update :messages conj msg)))
      state)))

(defn roll
  [state]
  (let [curr-i (:i state)
        new-value (rand-nth values)
        squares-to-go (reverse (take curr-i (:squares state)))
        next-square (first (filter #(= (:value %) new-value) squares-to-go))
        next-i (or (:i next-square) curr-i)]
    (-> state
        (assoc :value new-value)
        (assoc :i next-i)
        (update :messages conj (str "You go from " curr-i
                                    " to " next-i "."))
        (teleport))))

(defn messages-list
  [app]
  (apply dom/ul
         nil
         (for [m (:messages app)]
           (dom/li nil m))))

(defn steps-to-go-msg
  [i]
  (if (= i 0)
    (str "Whew! All done, time to go home ☺")
    (let [motivational (condp <= (/ i grid-squares)
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
                       "Try again tomorrow")
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
