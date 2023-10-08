(function(){
    const customerImage = document.getElementById('customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    function Customer(img, name, text){
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text);

        customers.push(customer);
    }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
    createCustomer(1, 'Sandy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
    createCustomer(2, 'Amy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
    createCustomer(3, 'Tyrell', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, natus? Fugiat architecto neque dolores voluptates blanditiis aperiam placeat nulla voluptate!');
    createCustomer(4, 'Wanda', 'blablabla');

    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length;
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }

            if (e.target.parentElement.classList.contains('nextBtn')){
                index++;
                if(index === customers.length){
                    index = 0;
                }
                
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
        })
    })
})();