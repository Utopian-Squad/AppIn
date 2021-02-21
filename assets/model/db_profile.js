export const db = new Dexie('AppIn Profile Databse');
db.version(1).stores({
    intern:`intern_id++,first_name,last_name,date_of_birth,level_of_education,email,password,gender,skill,work,cv,_is_apply` 
});




db.open();