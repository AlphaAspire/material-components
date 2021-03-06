import Component from 'vue-class-component';

import mdIcon from '../icon';
import mdSidenav from '../sidenav';

@Component({
    props: {
        active: {
            type: String,
            required: false,
            'default': null
        },
        showActive: {
            type: Boolean,
            required: false,
            'default': null,
            twoWay: false
        },
        title: {
            type: String,
            required: false,
            'default': '',
            twoWay: false
        },
        titleHref: {
            type: String,
            required: false,
            'default': 'javascript:void(0)',
            twoWay: false
        },
        right: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        left: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        center: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        fixed: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        navClass: {
            required: false,
            'default': null,
            twoWay: false
        },
        hamburger: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        mode: {
            type: String,
            required: false,
            'default': null,
            twoWay: false
        },
        closeOnClick: {
            type: Boolean,
            required: false,
            'default': true,
            twoWay: false
        },
        onlySideNav: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        wrapperClass: {
            required: false,
            'default': null,
            twoWay: false
        }
    },
    components: {
        mdIcon,
        mdSidenav
    },
    events: {
        'nav-item::activated': function (id, content) {
            // propagate event to children
            this.$broadcast('nav-item::activated', id);
            this.active = id;
            if (this.closeOnClick) {
                this.$broadcast('sidenav::close');
            }
        }
    },
    template: require('./navbar.html')
})
export default class Navbar {
    private $broadcast: any;

    private mode: string;
    private right: boolean;
    private left: boolean;
    private center: boolean;

    get logoClasses() {
        return {
            center: this.center,
            right: !this.center && !this.right,
            // left: !this.center && !this.left - left is default
        };
    }

    get listClasses() {
        var classes: any = {
            right: this.right,
            left: this.left,
        };
        if (this.mode) {
            classes[this.mode] = true;
        }
        return classes;
    }
    
    openSideMenu() {
        this.$broadcast('sidenav::open');
    }

    closeSideMenu() {
        this.$broadcast('sidenav::close');
    }
}