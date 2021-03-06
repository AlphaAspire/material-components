import Component from 'vue-class-component';

@Component({
    props: {
        value: {
            type: Number,
            required: false,
            'default': null,
            twoWay: false
        }
    },
    template: require('./linear-preloader.html')
})
export default class LinearPreloader {
    private value: number;

    get computedStyle() {
        if (this.value != null) {
            return {
                width: this.value + '%'
            }
        }

        return null;
    }
}