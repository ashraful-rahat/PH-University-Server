export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;

  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TUsername = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  name: TUsername;
  gender: "male" | "female";
  email: string;
  avatar?: string;
  dateOfBirth?: string;
  ContactNo: string;
  emergencyContact: string;
  BloodType?: "A" | "B" | "AB" | "O";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: "active" | "offline";
};
// create custom instance method

// export type studentMethods = {
//   isUserExists(id: string): Promise<TStudent>;
// };

// export type studentModelForInstance = Model<
//   TStudent,
//   Record<string, never>,
//   studentMethods
// >;
