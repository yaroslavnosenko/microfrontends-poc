'use client'

import React, { useState } from 'react'

const patientData = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  age: 32,
  gender: 'Male',
  condition: 'Post-Surgery Recovery',
  bloodType: 'O+',
  address: '123 Main St, Los Angeles, CA',
  nextAppointment: 'March 28, 2025',
  pastAppointments: [
    { date: 'Jan 10, 2025', status: 'Completed', doctor: 'Dr. Smith' },
    { date: 'Feb 15, 2025', status: 'Completed', doctor: 'Dr. Adams' },
  ],
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
}

export const PatientProfile = () => {
  const [patient] = useState(patientData)

  return (
    <div className="min-h-screen">
      <div className="mx-auto p-6">
        {/* Patient Details */}
        <div className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white md:flex-row">
          {/* Patient Avatar */}
          <div className="flex w-full items-center justify-center md:w-1/3">
            <img
              src={patient.avatar}
              className="border-brand h-48 w-48 rounded-full border-4"
            />
          </div>

          {/* Patient Info */}
          <div className="w-full p-6 md:w-2/3">
            <h2 className="mb-4 text-2xl font-bold">{patient.name}</h2>

            <div className="space-y-4">
              <p>
                <strong>Email:</strong> {patient.email}
              </p>

              <p>
                <strong>Phone:</strong> {patient.phone}
              </p>
              <p>
                <strong>Age:</strong> {patient.age} years
              </p>
              <p>
                <strong>Gender:</strong> {patient.gender}
              </p>
              <p>
                <strong>Blood Type:</strong> {patient.bloodType}
              </p>
              <p>
                <strong>Address:</strong> {patient.address}
              </p>
              <p>
                <strong>Condition:</strong> {patient.condition}
              </p>
              <p>
                <strong>Next Appointment:</strong> {patient.nextAppointment}
              </p>
            </div>
          </div>
        </div>

        {/* Past Appointments */}
        <div className="mt-8 overflow-hidden rounded-lg border border-gray-100 bg-white">
          <h3 className="bg-gray-100 px-6 py-4 text-xl font-bold">
            Past Appointments
          </h3>
          <div className="p-6">
            <ul className="space-y-4">
              {patient.pastAppointments.map((appointment, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b pb-4 last:border-b-0"
                >
                  <div>
                    <p>
                      <strong>Date:</strong> {appointment.date}
                    </p>
                    <p>
                      <strong>Doctor:</strong> {appointment.doctor}
                    </p>
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      appointment.status === 'Completed'
                        ? 'text-green-500'
                        : 'text-yellow-500'
                    }`}
                  >
                    {appointment.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
