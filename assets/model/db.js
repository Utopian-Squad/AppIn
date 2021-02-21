export const db = new Dexie('AppIn Databse');
db.version(1).stores({
    universities: `university_id++,name,title,description,level_of_education,requirements,post_image,aof,deadline`,
    organizations: `org_id++,org_name,org_title,org_description,org_level_of_education,org_requirements,org_post_image,org_aof,org_deadline,org_is_apply`,
    intern:`intern_id++,first_name,last_name,date_of_birth,level_of_education,email,password,gender,skill,work,cv,_is_apply`
    
});




db.open();


