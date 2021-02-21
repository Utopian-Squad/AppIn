

let DB;

let form = document.querySelector('form');
let applicantname = document.querySelector('#applicant-name');
let contact = document.querySelector('#contact');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let letter = document.querySelector('#letter');
let citizenship = document.querySelector('#citizenship');

let consultations = document.querySelector('#consultations');
let services = document.querySelector('#services');

document.addEventListener('DOMContentLoaded', () => {
  // create the database
  let ScheduleDB = window.indexedDB.open('consultations', 1);

  // if there's an error
  ScheduleDB.onerror = function () {
    console.log('error');
  }
  // if everything is fine, assign the result is to the (letDB) instance 
  ScheduleDB.onsuccess = function () {
    // console.log('Database Ready');


    DB = ScheduleDB.result;

    showConsultations();
  }


  ScheduleDB.onupgradeneeded = function (e) {

    let db = e.target.result;

    let objectStore = db.createObjectStore('consultations', { keyPath: 'key', autoIncrement: true });


    objectStore.createIndex('applicantname', 'applicantname', { unique: false });
    objectStore.createIndex('contact', 'contact', { unique: false });
    objectStore.createIndex('date', 'date', { unique: false });
    objectStore.createIndex('time', 'time', { unique: false });
    objectStore.createIndex('letter', 'letter', { unique: false });
    objectStore.createIndex('citizenship', 'citizenship', { unique: false });

    //console.log('Database ready and fields created!');
  }

  form.addEventListener('submit', addConsultations);

  function addConsultations(e) {
    e.preventDefault();
    let newConsultation = {
      applicantname: applicantname.value,

      contact: contact.value,
      date: date.value,
      time: time.value,
      letter: letter.value,
      citizenship: citizenship.value,
    }

    let transaction = DB.transaction(['consultations'], 'readwrite');
    let objectStore = transaction.objectStore('consultations');

    let request = objectStore.add(newConsultation);
    request.onsuccess = () => {
      form.reset();
    }
    transaction.oncomplete = () => {
      //console.log('New schedule added');

      showConsultations();
    }
    transaction.onerror = () => {
      //console.log();
    }

  }
  function showConsultations() {

    while (consultations.firstChild) {
      consultations.removeChild(consultations.firstChild);
    }

    let objectStore = DB.transaction('consultations').objectStore('consultations');

    objectStore.openCursor().onsuccess = function (e) {

      let cursor = e.target.result;
      if (cursor) {
        let ConsultationHTML = document.createElement('li');
        ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
        ConsultationHTML.classList.add('list-group-item');


        ConsultationHTML.innerHTML = `  
                         <p class="font-weight-bold">Applicant Name:  <span class="font-weight-normal">${cursor.value.applicantname}<span></p>
                          <p class="font-weight-bold">Contact:  <span class="font-weight-normal">${cursor.value.contact}<span></p>
                         <p class="font-weight-bold">Date:  <span class="font-weight-normal">${cursor.value.date}<span></p>
                         <p class="font-weight-bold">Time:  <span class="font-weight-normal">${cursor.value.time}<span></p>
                         <p class="font-weight-bold">letter:  <span class="font-weight-normal">${cursor.value.letter}<span></p>
                         <p class="font-weight-bold">citizenship:  <span class="font-weight-normal">${cursor.value.citizenship}<span></p>

                         `;


        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('btn', 'btn-danger');
        cancelBtn.innerHTML = 'Cancel';
        cancelBtn.onclick = removeConsultation;


        ConsultationHTML.appendChild(cancelBtn);
        consultations.appendChild(ConsultationHTML);

        cursor.continue();
      } else {
        if (!consultations.firstChild) {
          services.textContent = 'Your Application';
          let noSchedule = document.createElement('p');
          noSchedule.classList.add('text-center');
          noSchedule.textContent = 'No results Found';
          consultations.appendChild(noSchedule);
        } else {
          services.textContent = 'applicant info'
        }
      }
    }
  }

  function removeConsultation(e) {

    let scheduleID = Number(e.target.parentElement.getAttribute('data-consultation-id'));

    let transaction = DB.transaction(['consultations'], 'readwrite');
    let objectStore = transaction.objectStore('consultations');

    objectStore.delete(scheduleID);

    transaction.oncomplete = () => {

      e.target.parentElement.parentElement.removeChild(e.target.parentElement);

      if (!consultations.firstChild) {

        services.textContent = 'Your Application';

        let noSchedule = document.createElement('p');

        noSchedule.classList.add('text-center');

        noSchedule.textContent = 'No application Found';

        consultations.appendChild(noSchedule);
      } else {
        services.textContent = 'Cancel your Application'
      }
    }
  }

});