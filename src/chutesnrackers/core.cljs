(ns chutesnrackers.core
  (:require [clojure.string :as s]
            [figwheel.client :as fw]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)
(println "Let's play Chutes 'n' Rackers!")

;; Adults wanna learn, but they don't wanna be taught!

(def square-px 80)
(def gutter-width 60)

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

(def square-types
  "Square types, frequency weighted by probability."
  (conj (repeat 5 nil) :chute))

(def initial-state
  {:i (dec grid-squares)
   :value nil
   :squares (for [i (range grid-squares)]
              (let [color (rand-nth colors)
                    square-type (rand-nth square-types)]
                {:i i
                 :color color
                 :value (values-by-color color)
                 :square-type square-type}))
   :messages '("You start your day at the Rack.")})

(defonce app-state
  (atom initial-state))

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
  [{i :i color :color square-type :square-type}]
  (dom/div #js {:className (s/join " " ["grid-square" color])
                :style (position-style i)
                :id (str "grid-square-" i)}
           (when square-type
             (dom/img #js {:style #js {:top "40px"
                                       :left "5px"}
                           :src "img/hole.png"}))))

(defn peon
  [i]
  (dom/img #js {:className "peon"
                :src "img/rackspace.png"
                :style (position-style i)}))

(def happy-customer
  (dom/img #js {:className "happy-customer"
                :src "img/happy-customer.png"
                :style (position-style 0)}))

(defn grid
  [app]
  (apply dom/div #js {:className "grid"}
         (conj (map grid-square (:squares app))
               (peon (:i app))
               happy-customer)))

(defn values-list
  [app]
  (apply dom/ul nil
         (for [[color value] values-by-color]
           (let [classes (if (= (:value app) value)
                             [color "highlight"]
                             [color])]
             (dom/li
              #js {:className (s/join " " classes)}
              (dom/span nil value))))))

(defn roll
  [state]
  (let [prev-i (:i state)
        new-value (rand-nth values)
        squares-to-go (reverse (take prev-i (:squares state)))
        next-square (first (filter #(= (:value %) new-value) squares-to-go))
        next-i (or (:i next-square) prev-i)]
    (-> state
        (assoc :value new-value)
        (assoc :i next-i)
        (update :messages conj (str "You go from " prev-i " to " next-i ".")))))

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
    (str i " steps to go.")))

(defn hud
  [app]
  (dom/div #js {:className "hud"}
           (dom/span nil (steps-to-go-msg (:i app)))
           (values-list app)
           (dom/button #js {:disabled (= (:i app) 0)
                            :onClick #(om/transact! app roll)}
                       "Let's go!")
           (dom/button #js {:onClick #(om/update! app initial-state)}
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
