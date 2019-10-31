const car  = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Bmw', 'M5', 'Shama', '2019', '+7 999 999 99 05', 'images/bmw.jpg' ),
    car('Ferrari', 'Enzo', 'Aba', '2017', '+7 999 666 66 05', 'images/ferrari.jpg' ),
    car('Lexus', 'LF-LC', 'Hadzhik', '2015', '+7 905 111 19 05', 'images/lexus.jpeg' ),
    car('Lambo', 'Huracan', 'Kama', '2018', '+7 999 818 18 05', 'images/lambo.jpg' ),
    car('Koenigsegg', 'C1', 'Yusuf', '2013', '+7 905 000 50 05', 'images/Koenigsegg.jpg' )
]

new Vue ({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            ) 
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})