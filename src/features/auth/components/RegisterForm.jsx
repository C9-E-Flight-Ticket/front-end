import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import SideBanner from "./SideBanner";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex h-screen">
      <SideBanner />

      <div className="basis-1/2 bg-white p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-left">Daftar</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField label="Nama" type="text" placeholder="John Doe" />
            <InputField
              label="Email"
              type="email"
              placeholder="Johndoe@gmail.com"
            />
            <InputField
              label="Nomor Telepon"
              type="tel"
              placeholder="+62.81818181"
            />
            <InputField
              label="Buat Password"
              type="password"
              placeholder="********"
            />
            <Button type="submit" text="Daftar" color="bg-purple-500" />
          </form>
          <p className="mt-4 text-center">
            Sudah punya akun?{" "}
            <a href="#" className="text-purple-500">
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
