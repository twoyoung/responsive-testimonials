function Customer(img, name, reviewPoint, description){
    this.img = img;
    this.name = name;
    this.reviewPoint = reviewPoint;
    this.description = description;
}

const customer1 = new Customer('0', 'John', 4.5, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
const customer2 = new Customer('1', 'Wanda', 3.5, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
const customer3 = new Customer('2', 'Lisa', 2, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
const customer4 = new Customer('3', 'Jenny', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
const customer5 = new Customer('4', 'Febby', 5, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
const customer6 = new Customer('5', 'Ted', 3, 'blablablabla');

const customerList = [customer1, customer2, customer3, customer4, customer5, customer6];

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const imgEl = document.querySelector('.card img');
const customerName = document.querySelector('#customer-name');
// const review = document.querySelectorAll('.star');
const description = document.getElementById('customer-text');

function displayCustomer(customer){
    imgEl.src =`img/${customer.img}.jpg`;
    customerName.textContent = customer.name;
    // for(let i = 0; i < Math.floor(customer.review); i++){
    //     review[i].style.color = '#ff5733';
    //     if(customer.review > Math.floor(customer.review)){
    //         review[Math.floor(customer1.review)].children.classList.remove('fa-star')
    //         review[Math.floor(customer1.review)].children.classList.add('fa-star-half')
    //     }
    // }
    description.textContent = customer.description;

}

displayCustomer(customerList[0]);

let indexOfDisplayedCustomer = 0;

prevBtn.addEventListener('click', () => {
    if(indexOfDisplayedCustomer === 0){
        indexOfDisplayedCustomer = customerList.length;
    }
    indexOfDisplayedCustomer--;
    displayCustomer(customerList[indexOfDisplayedCustomer]);
})

nextBtn.addEventListener('click', () => {
    indexOfDisplayedCustomer++;
    if(indexOfDisplayedCustomer === customerList.length){
        indexOfDisplayedCustomer = 0;
    }
        // review.forEach((star) => {
        //     star.style.color = 'grey';
        // })    
    
    displayCustomer(customerList[indexOfDisplayedCustomer]);
})





