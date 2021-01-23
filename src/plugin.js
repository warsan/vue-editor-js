/*
 * NOTE:
 *   Этот файл является заглушкой для main.js
 */

import Vue from 'vue'
import plugin from './index'

Vue.use(plugin)

/*
 * NOTE:
 *   Если вы хотите, чтобы экземпляр Vue из main.js импортировал что-то в ваш плагин как параметр Vue, 
 * * вам нужно экспортировать это здесь.
 */
export default plugin
