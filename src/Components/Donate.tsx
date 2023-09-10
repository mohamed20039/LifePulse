import { Button } from "@nextui-org/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input, Select, SelectItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { blood_types } from "../Pages/Data";

interface donate {
  info: any;
}

const Donate = ({ info }: donate) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState<Set<any>>(new Set());
  const [ageError, setAgeError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleAge = (e: { target: { value: string } }) => {
    const inputAge = parseInt(e.target.value.trim());

    let requiredAge = 16;
    if (inputAge && inputAge <= requiredAge) {
      setAgeError("You have to be older than 16");
    } else {
      setAgeError("");
    }
  };

  const handleWeight = (e: { target: { value: string } }) => {
    const inputWeight = parseInt(e.target.value.trim());

    let requiredWeight = 112;
    if (inputWeight && inputWeight <= requiredWeight) {
      setWeightError("Your weight must be greater than 112 lbs");
    } else {
      setWeightError("");
    }
  };

  const handleSelectionChange = (e: { target: { value: any } }) => {
    setValue(new Set([e.target.value]));
  };

  const handleDate = (e: { target: { value: string | number | Date } }) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    const differenceInMonths =
      (currentDate.getFullYear() - selectedDate.getFullYear()) * 12 +
      (currentDate.getMonth() - selectedDate.getMonth());

    console.log(differenceInMonths);

    // Check if the difference is at least 6 months or more
    if (differenceInMonths < 6) {
      setDateError(
        "You donoted blood in last 6 months so you can't donate now"
      );
    } else {
      setDateError("");
    }
  };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_3xx9tn9",
          "template_8yqk2ml",
          form.current,
          "azZSHXQXmFozK28Zx"
        )
        .then(
          () => {
            console.log("Email sent successfully");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("Form element is null");
    }
  };
  return (
    <div className="text-black w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
      <img className=" rounded-lg h-48" src={info.hospitalimage} alt="" />

      <h1 className="text-center">{info.hospitalName}</h1>
      <h1 className="text-center">{info.hospitalLocation}</h1>
      <Button
        color="primary"
        variant="solid"
        className="bg-blue-500 my-3 py-2 text-white w-48 mx-auto rounded-lg"
        onPress={onOpen}
      >
        Donate Now{" "}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-1 items-center justify-center">
                <span className="text-indigo-500">{info.hospitalName}</span>{" "}
                Blood Donation Form
              </ModalHeader>
              <form action="" onSubmit={sendEmail} ref={form}>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Name"
                    placeholder="Enter your Name"
                    variant="bordered"
                    name="name"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    variant="bordered"
                    name="email"
                  />
                  <Input
                    label="Age"
                    placeholder="Enter your age: must be above 16 years old"
                    variant="bordered"
                    onChange={handleAge}
                    name="age"
                  />
                  {ageError && (
                    <p className="text-red-700 text-sm">{ageError}</p>
                  )}
                  <Input
                    label="Weight"
                    placeholder="Enter your weight in lbs..."
                    variant="bordered"
                    onChange={handleWeight}
                    name="weight"
                  />
                  {weightError && (
                    <p className="text-red-700 text-sm">{weightError}</p>
                  )}
                  <Input
                    label="Last Time donated Blood"
                    type="date"
                    variant="bordered"
                    onChange={handleDate}
                    name="date"
                  />
                  {dateError && (
                    <p className="text-red-700 text-sm">{dateError}</p>
                  )}
                  <Select
                    label="Blood Type"
                    variant="bordered"
                    placeholder="Select you blood type"
                    selectedKeys={value}
                    className="max-w-xs"
                    onChange={handleSelectionChange}
                    name="blood_type"
                  >
                    {blood_types.map((blood_type) => (
                      <SelectItem
                        key={blood_type.value}
                        value={blood_type.value}
                      >
                        {blood_type.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <div className="flex py-2 px-1 justify-between"></div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  {ageError || dateError || weightError ? (
                    <Button
                      type="submit"
                      isDisabled
                      color="primary"
                      onPress={onClose}
                    >
                      Sign in
                    </Button>
                  ) : (
                    <Button type="submit" color="primary" onPress={onClose}>
                      Sign in
                    </Button>
                  )}
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Donate;
