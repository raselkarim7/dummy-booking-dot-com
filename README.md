# Dummy booking dot com 
***
Bacend was done in laravel, and frontend in React Js. 
***

**Clone this project, go to root directory. 
Follow the Steps**

### Step 1: Database configuraton:
* Create **.env file** and copy everything from **.env.example**, and paste in **.env**
* Here I used mysql database, Create a database in mysql & configure these in **.env** file
```
	DB_CONNECTION=mysql
	DB_HOST=127.0.0.1
	DB_PORT=3306
	DB_DATABASE=dummy_booking_dot_com
	DB_USERNAME=root
	DB_PASSWORD=

```
### Step 2: Run following commands
```
composer install

npm install 

php artisan key:generate

php artisan passport:keys

php artisan migrate:fresh --seed
```
* Then run below command and Then you have to press enter again to execute.
```
php artisan passport:client --personal
```

* Then run following commands
```
npm run dev 

php artisan cache:clear

php artisan config:clear

```

* Final command 

```
php artisan serve
```
This command will generate and url and go to that. 

More Points:
- user must create an account to upload property
- search page, detail page, landing page images showed. 
- Database design & steps are inside TaskPlans.txt file in the root directory. 
- comments + ratings ( not done )
- Reusable search field was made (not functional)