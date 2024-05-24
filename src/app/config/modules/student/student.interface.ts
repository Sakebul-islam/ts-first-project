import { Schema, model, connect } from 'mongoose';

export type UserName = {
  firstName: String;
  middleName: String;
  lastName: String;
};

export type Guardian = {
  fatherName: String;
  FatherOccupation: String;
  fatherContactNo: String;
  motherName: String;
  MotherOccupation: String;
  motherContactNo: String;
};


export type LocalGuardian = {
  name: String;
  occupation: String;
  contactNo: String;
  address: String;
};
export type Student = {
  id: String;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: String;
  email: string;
  contactNo: String;
  emergencyContactNo: String;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: String;
  permanentAddress: String;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: String;
  isActive: "active"|"blocked";
};
