import {Index as Index} from '/router/routes/index.js';
import {Overview as Overview} from '/router/routes/index/overview.js';
import {Installation as Installation} from '/router/routes/index/installation.js';
import {Usage as Usage} from '/router/routes/index/usage.js';
import {Button as Button} from '/router/routes/index/button.js';
import {Input as Input} from '/router/routes/index/input.js';
import {Dropdown as Dropdown} from '/router/routes/index/dropdown.js';
import {Radio as Radio} from '/router/routes/index/radio.js';
import {Checkbox as Checkbox} from '/router/routes/index/checkbox.js';
import {Toggle as Toggle} from '/router/routes/index/toggle.js';
import {Icon as Icon} from '/router/routes/index/icon.js';
import {Alert as Alert} from '/router/routes/index/alert.js';
import {Loader as Loader} from '/router/routes/index/loader.js';
import {Attention as Attention} from '/router/routes/index/attention.js';
import {Tab as Tab} from '/router/routes/index/tab.js';
import {Modal as Modal} from '/router/routes/index/modal.js';
import {Table as Table} from '/router/routes/index/table.js';
import {Popover as Popover} from '/router/routes/index/popover.js';
import {Pagination as Pagination} from '/router/routes/index/pagination.js';
import {Avatar as Avatar} from '/router/routes/index/avatar.js';
import {Autocomplete as Autocomplete} from '/router/routes/index/autocomplete.js';
import {Fileupload as Fileupload} from '/router/routes/index/fileupload.js';
import {Cards as Cards} from '/router/routes/index/cards.js';
import {Doublefield as Doublefield} from '/router/routes/index/doublefield.js';
import {Keyvalue as Keyvalue} from '/router/routes/index/keyvalue.js';
import {Datepicker as Datepicker} from '/router/routes/index/datepicker.js';

import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { RouterMap } from "../../node_modules/@slyte/router/index.js";

class ZcatAppMap extends RouterMap {
    map() {
        this.route("index",{
            path:'/',
            handler: Index
        }, () => {
            this.route("overview",{
                path:'/overview',
                handler: Overview
            });
            this.route("installation",{
                path:'/installation',
                handler: Installation
            });
            this.route("usage",{
                path:'/usage',
                handler: Usage
            });
            this.route("button",{
                path:'/button',
                handler: Button
            });
            this.route("input",{
                path:'/input',
                handler: Input
            });
            this.route("dropdown",{
                path:'/dropdown',
                handler: Dropdown
            });
            this.route("radio",{
                path:'/radio',
                handler: Radio
            });
            this.route("checkbox",{
                path:'/checkbox',
                handler: Checkbox
            });
            this.route("toggle",{
                path:'/toggle',
                handler: Toggle
            });
            this.route("icon",{
                path:'/icon',
                handler: Icon
            });
            this.route("alert",{
                path:'/alert',
                handler: Alert
            });
            this.route("loader",{
                path:'/loader',
                handler: Loader
            });
            this.route("attention",{
                path:'/attention',
                handler: Attention
            });
            this.route("tab",{
                path:'/tab',
                handler: Tab
            });
            this.route("modal",{
                path:'/modal',
                handler: Modal
            });
            this.route("table",{
                path:'/table',
                handler: Table
            });
            this.route("popover",{
                path:'/popover',
                handler: Popover
            });
            this.route("pagination",{
                path:'/pagination',
                handler: Pagination
            });
            this.route("avatar",{
                path:'/avatar',
                handler: Avatar
            });
            this.route("autocomplete",{
                path:'/autocomplete',
                handler: Autocomplete
            });
            this.route("fileupload",{
                path:'/fileupload',
                handler: Fileupload
            });
            this.route("cards",{
                path:'/cards',
                handler: Cards
            });
            this.route("doublefield",{
                path:'/doublefield',
                handler: Doublefield
            });
            this.route("keyvalue",{
                path:'/keyvalue',
                handler: Keyvalue
            });
            this.route("datepicker",{
                path:'/datepicker',
                handler: Datepicker
            });
        });
	}

    _() {
        _;
    }
}

ZcatAppMap.path = '../routes';
export {ZcatAppMap};
