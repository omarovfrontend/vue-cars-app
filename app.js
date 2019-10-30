// function car(name, model, owner, year, phone, image) {
//     return {
//         name, model, owner, year, phone, image
//     }
// }

const car  = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })

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
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
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
    }
})