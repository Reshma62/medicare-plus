"use client";

import MediForm from "@/components/form/MediForm";
import MediInput from "@/components/form/MediInput";
import MediButton from "@/components/ui/MediButton";
import { Button } from "@nextui-org/react"; // Use the correct Next UI Button component

export default function Home() {
  const handleSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div>
      <h1>Home</h1>
      <MediButton text={"Click me"} href={"/about"} />
      <MediForm onSubmit={handleSubmit}>
        <MediInput
          type="text"
          label="Name"
          name="abc"
          placeHolder={"Enter your name"}
        />
        <MediInput
          label="Email"
          name="email"
          type="email"
          required={true}
          pattern={/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/} // Email validation regex
          errorMessage="Please enter a valid email"
          placeHolder={"Enter your email"}
        />
        <Button type="submit">Submit</Button>
      </MediForm>
    </div>
  );
}
