class Doctor {
  constructor(firstName, lastName, specialization) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.specialization = specialization
  }

  makeAnAppointment(type, patient) {
    switch (type) {
      case 'BloodPressureCheck':
        const bloodPressureAppointment = new BloodPressureCheck(this, patient)
        console.log(`${date} dr. ${this.firstName} made an appointment for ${patient.firstName} to check blood pressure`)
        return bloodPressureAppointment;
      case 'BloodSugarCheck':
        const bloodSugarCheckApp = new BloodSugarCheck(this, patient);
        console.log(`${date} dr. ${this.firstName} made an appointment for ${patient.firstName} to check blood sugar`)
        return bloodSugarCheckApp
      case 'CholesterolCheck':
        const cholesterolCheck = new CholesterolCheck(this, patient);
        console.log(`${date} dr. ${this.firstName} made an appointment for ${patient.firstName} to check choleserol`)
        return cholesterolCheck
      default:
        return;
    }
  }
}

class Patient {
  constructor(firstName, lastName, JMBG, fileNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.JMBG = JMBG;
    this.fileNumber = fileNumber;
  }

  chooseDoctor(doctor) {
    this.doctor = doctor;
    console.log(`${date} patient ${this.firstName} choose dr.${doctor.firstName} to be his doctor`)
  }

  takeATest(testCard) {
    testCard.doTheTest(this);
  }
}

class Appointment {
  constructor(doctor, patient) {
    this.doctor = doctor;
    this.patient = patient;
  }
}

class BloodPressureCheck extends Appointment {
  constructor(doctor, patient) {
    super(doctor, patient);
  }

  doTheTest(patient) {
    if (patient == this.patient) {
      this.upValue = Math.floor(Math.random() * 300) + 1;
      this.downValue = Math.floor(Math.random() * 200) + 1;
      this.pulseRate = `${Math.floor(Math.random() * 40) + 1} beats per minute`;
      console.log(`${date} ${patient.firstName} cheked his blood pressure and these are his results: upValue = ${this.upValue}; downValue = ${this.downValue}; pulsRate = ${this.pulseRate}`)
      return;
    }
    console.log(`Sir, you don't have an appointment`)
  }
}

class BloodSugarCheck extends Appointment {
  constructor(doctor, patient, value, lastMeal) {
    super(doctor, patient);
  }

  doTheTest(patient) {
    if (patient == this.patient) {
      this.value = `${Math.floor(Math.random() * 130) + 1} mg/dL`;
      this.lastMeal = `${Math.floor(Math.random() * 30) + 1} hours ago`;
      console.log(`${date} patient ${patient.firstName} cheked his blood sugar and these are his results: value = ${this.value}; last meal = ${this.lastMeal}`)
      return;
    }
    console.log(`Sir, you don't have an appointment`)
  }
}

class CholesterolCheck extends Appointment {
  constructor(doctor, patient, value, lastMeal) {
    super(doctor, patient);
  }

  doTheTest(patient) {
    if (patient == this.patient) {
      this.value = `${Math.floor(Math.random() * 130) + 1} mg/dL`;
      this.lastMeal = `${Math.floor(Math.random() * 30) + 1} hours ago`;
      console.log(`${date} patient ${patient.firstName} cheked his blood sugar and these are his results: value = ${this.value}; last meal = ${this.lastMeal}`)
      return;
    }
    console.log(`Sir, you don't have an appointment`)
  }
}

const today = new Date();
const date = `[${today.getDate()}.${today.getMonth()}.${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}]`

const doctor = new Doctor('Milan', 'Milanovic', 'Urolog');
console.log(`${date} dr. ${doctor.firstName} was created`)
const patient = new Patient('Dragan', 'Dragic', 12345, 6789);
console.log(`${date} patient ${patient.firstName} was created`)
patient.chooseDoctor(doctor);
const bloodSugarCheckCard = doctor.makeAnAppointment('BloodSugarCheck', patient);
const bloodPressureCheckCard = doctor.makeAnAppointment('BloodPressureCheck', patient);
patient.takeATest(bloodSugarCheckCard);
patient.takeATest(bloodPressureCheckCard);