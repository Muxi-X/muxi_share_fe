import Vue from 'vue'
import App from './components/App'

const New = {
    mixins: [App]
}

New.el = "#new"
new Vue(New)
