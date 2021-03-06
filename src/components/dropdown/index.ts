import Component from 'vue-class-component';

import mdButton from '../button';
import mdDropdownList from '../dropdown-list';
import mdDropdownItem from '../dropdown-item';

import onClickAway from '../../directives/click-away';

@Component({
    props: {
        title: {
            type: String,
            required: false,
            'default': '',
            twoWay: false
        },
        value: {
            type: String,
            required: false,
            'default': '',
        }
    },
    directives: {
        onClickAway
    },
    components: {
        mdButton,
        mdDropdownList,
        mdDropdownItem
    },
    events: {
        'dropdown-list::close': function () {
            // emitted by item -> propagated do list
            this.$broadcast('dropdown-list::close');
            this.$dispatch('dropdown::close')
        },
        'dropdown-item::selected': function (id) {
            this.value = id;
            return true;
        },
        'dropdown::open': function (e) {
            this.$broadcast('dropdown-list::open', e);
        }
    },
    template: require('./dropdown.html')
})
export default class Dropdown {
    private $broadcast: any;

    open(e) {
        this.$broadcast('dropdown-list::open', e);
    }

    close() {
        this.$broadcast('dropdown-list::close');
    }
}