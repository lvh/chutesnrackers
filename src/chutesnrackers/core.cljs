(ns chutesnrackers.core
  (:require [clojure.string :as s]
            [figwheel.client :as fw]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)
(println "Let's play Chutes 'n' Rackers!")

;; Adults wanna learn, but they don't wanna be taught!

(def square-px 80)
(def gutter-width 80)

(def rows 5)
(def cols 8)
(def grid-squares (* rows cols))

(def colors ["red" "yellow" "green" "teal" "blue" "purple"])

(defn initial-state
  []
  {:i (dec grid-squares)})

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
  [i color]
  (dom/div #js {:className (s/join " " ["grid-square" color])
                :style (position-style i)
                :id (str "grid-square-" i)}
           (str i " " (grid-loc i))))

(defn peon
  [i]
  (dom/img #js {:className "peon"
                :src "img/rackspace.png"
                :style (position-style i)}))

(defn grid
  [app]
  (apply dom/div #js {:className "grid"}
         (conj (map grid-square
                    (range grid-squares)
                    (cycle colors))
               (peon (:i app)))))

(defn hud
  [app]
  (dom/div #js {:className "hud"}
           (dom/span nil (str "Steps to go: " (:i app)))))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/div #js {:className "container"}
                 (grid app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

(fw/start {
  :on-jsload (fn []
               ;; (stop-and-start-my app)
               )})
