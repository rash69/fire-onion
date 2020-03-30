import break1 from './../images/Breakfast/breakfast1.png';
import break2 from './../images/Breakfast/breakfast2.png';
import break3 from './../images/Breakfast/breakfast3.png';
import break4 from './../images/Breakfast/breakfast4.png';
import break5 from './../images/Breakfast/breakfast5.png';
import break6 from './../images/Breakfast/breakfast6.png';

import lunch1 from './../images/lunch/lunch1.png';
import lunch2 from './../images/lunch/lunch2.png';
import lunch3 from './../images/lunch/lunch3.png';
import lunch4 from './../images/lunch/lunch4.png';
import lunch5 from './../images/lunch/lunch5.png';
import lunch6 from './../images/lunch/lunch6.png';

import dinner1 from './../images/Dinner/dinner1.png';
import dinner2 from './../images/Dinner/dinner2.png';
import dinner3 from './../images/Dinner/dinner3.png';
import dinner4 from './../images/Dinner/dinner4.png';
import dinner5 from './../images/Dinner/dinner5.png';
import dinner6 from './../images/Dinner/dinner6.png';




const data =[
    {
        'id': '1',
        'recipe_name': 'Bagel and cream cheese',
        'category': 'Breakfast',
        'label': 'Eat healthy, feel healthy',
        'price': '6.99',
        "key":"B01H2E0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': break1
    },
    {
        'id': '2',
        'recipe_name': 'Sandwich',
        'category': 'Breakfast',
        'label': 'Eat healthy, feel healthy',
        'price': '9.99',
        "key":"B01SA60J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': break2
    },
    {
        'id': '3',
        'recipe_name': 'Baked chicken',
        'category': 'Breakfast',
        'label': 'Eat healthy, feel healthy',
        'price': '10.99',
        "key":"B01H2EA85M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': break3
    },
    {
        'id': '4',
        'recipe_name': 'Eggs benedict',
        'category': 'Breakfast',
        'label': 'Eat healthy, feel healthy',
        'price': '8.99',
        "key":"741H2E0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': break4
    },
    {
        'id': '5',
        'recipe_name': 'Toast croissant fried egg',
        'category': 'Breakfast',
        'label': 'Eat healthy, feel healthy',
        'price': '19.99',
        "key":"B01H2E0YHM",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': break5
    },
    {
        'id': '6',
        'recipe_name': 'Fried egg toast brunch',
        'category': 'Breakfast',
        'label': 'Eat healthy, feel healthy',
        'price': '3.99',
        "key":"B01AWE0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': break6
    },
    {
        'id': '7',
        'recipe_name': 'Healthy meal plan',
        'category': 'Lunch',
        'label': 'Eat healthy, feel healthy',
        'price': '23.99',
        "key":"B01H2E3K5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': lunch1
    },
    {
        'id': '8',
        'recipe_name': 'Fried chicken bento',
        'category': 'Lunch',
        'label': 'Eat healthy, feel healthy',
        'price': '9.99',
        "key":"B75H2E0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': lunch2
    },
    {
        'id': '9',
        'recipe_name': 'Tarragon rubbed salmon',
        'category': 'Lunch',
        'label': 'Eat healthy, feel healthy',
        'price': '6.99',
        "key":"B01H2E0WPM",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': lunch3
    },
    {
        'id': '10',
        'recipe_name': 'Indian lunch',
        'category': 'Lunch',
        'label': 'Eat healthy, feel healthy',
        'price': '8.99',
        "key":"B01HQH0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': lunch4
    },
    {
        'id': '11',
        'recipe_name': 'Beef steak',
        'category': 'Lunch',
        'label': 'Eat healthy, feel healthy',
        'price': '15.99',
        "key":"B07X2E0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': lunch5
    },
    {
        'id': '12',
        'recipe_name': 'Honey soy glazed salmon with peppers',
        'category': 'Lunch',
        'label': 'Eat healthy, feel healthy',
        'price': '7.99',
        "key":"B01HZM0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': lunch6
    },
    {
        'id': '13',
        'recipe_name': 'Salmon with grapefruit and lentil salad',
        'category': 'Dinner',
        'label': 'Eat healthy, feel healthy',
        'price': '9.99',
        "key":"B0GQ2E0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': dinner1
    },
    {
        'id': '14',
        'recipe_name': 'Lemony salmon piccata',
        'category': 'Dinner',
        'label': 'Eat healthy, feel healthy',
        'price': '10.99',
        "key":"B01H2E0K5U",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': dinner2
    },
    {
        'id': '15',
        'recipe_name': 'Pork tenderloin with quinoa pilaf',
        'category': 'Dinner',
        'label': 'Eat healthy, feel healthy',
        'price': '12.99',
        "key":"B0F02E0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': dinner3
    },
    {
        'id': '16',
        'recipe_name': 'French fries with cheese',
        'category': 'Dinner',
        'label': 'Eat healthy, feel healthy',
        'price': '8.99',
        "key":"B01Z5E0J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': dinner4
    },
    {
        'id': '17',
        'recipe_name': 'Garlic butter baked salmon',
        'category': 'Dinner',
        'label': 'Eat healthy, feel healthy',
        'price': '6.99',
        "key":"B01H2K6J5M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': dinner5
    },
    {
        'id': '18',
        'recipe_name': 'Baked chicken',
        'category': 'Dinner',
        'label': 'Eat healthy, feel healthy',
        'price': '9.99',
        "key":"B01H2E0I8M",
        'description': 'Using food description words helped boost sales with 27% more than the same name dishes not accompanied by them.',
        'img': dinner6
    },


] 



export default data;