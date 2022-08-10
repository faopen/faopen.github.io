import { Box, Center } from "@faharmony/theme";
import { PageView } from "@faharmony/views";
import {
  ITabsProps,
  TabOrientationType,
  ITabFormProps,
} from "@faharmony/navigation";
import { useForm, useFormContext } from "react-hook-form";
import { FormControl, TextField } from "@faharmony/form";
import { useState } from "react";
import { Button } from "@faharmony/components";

const Page = () => {
  interface UserFormInputs {
    firstName: string;
    lastName: string;
    address?: {};
    phone?: string;
    email?: string;
    username: string | undefined;
    password: string | undefined;
  }
  const userFormDefaultValues: Partial<UserFormInputs> = {
    firstName: undefined,
    lastName: undefined,
    address: {},
    phone: "",
    email: "",
    username: "",
    password: "",
  };

  const UserFirstNameField = () => {
    const { register, errors } = useFormContext<UserFormInputs>();
    return (
      <Box direction="column">
        <FormControl
          label="First name"
          errorText={errors.firstName?.message}
          helpText="Firstname of the user."
          required
        >
          <TextField
            name="firstName"
            placeholder="Enter full name"
            error={!!errors.firstName}
            ref={register({
              required: "Firstname is required",
              minLength: {
                value: 3,
                message: "At least 3 characters required.",
              },
            })}
          />
        </FormControl>
      </Box>
    );
  };

  const UserLastNameField = () => {
    const { register, errors } = useFormContext<UserFormInputs>();
    return (
      <Box direction="column">
        <FormControl
          label="Lastname"
          helpText="Lastname of the user."
          errorText={errors.lastName?.message}
          required
        >
          <TextField
            name="lastName"
            placeholder="Enter lastname"
            error={!!errors.lastName}
            ref={register({
              required: "Lastname is required",
              minLength: {
                value: 3,
                message: "At least 3 characters required.",
              },
            })}
          />
        </FormControl>
      </Box>
    );
  };

  const AddressField = ({ i }: { i: number }) => {
    const { register, errors } = useFormContext<UserFormInputs>();
    return (
      <Box direction="column">
        <FormControl
          label={"Address " + i}
          errorText={errors.address ? errors.address[i].message : ""}
        >
          <TextField
            name={"address." + i}
            placeholder={"Enter address line " + i}
            error={errors.address ? !!errors.address[i] : false}
            ref={register}
          />
        </FormControl>
      </Box>
    );
  };

  const PhoneField = () => {
    const { register, errors } = useFormContext<UserFormInputs>();
    return (
      <Box direction="column">
        <FormControl label="Phone" errorText={errors.phone?.message}>
          <TextField
            name={"phone"}
            placeholder="Enter phone number"
            error={!!errors.phone}
            ref={register({
              pattern: {
                value: /^\d{10}$/,
                message: "Only 10 digits phone number is allowed ",
              },
            })}
          />
        </FormControl>
      </Box>
    );
  };

  const EmailField = () => {
    const { register, errors } = useFormContext<UserFormInputs>();
    return (
      <Box direction="column">
        <FormControl label="Email" errorText={errors.email?.message}>
          <TextField
            name={"email"}
            placeholder="Enter email"
            error={!!errors.email}
            ref={register({
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Invalid email",
              },
            })}
          />
        </FormControl>
      </Box>
    );
  };

  const UserFormUsernameField = () => {
    const { register, errors } = useFormContext<UserFormInputs>();
    return (
      <Box direction="column">
        <FormControl
          label="Username"
          helpText="Login username for the user."
          errorText={errors.username?.message}
          required
        >
          <TextField
            name="username"
            placeholder="Enter username"
            error={!!errors.username}
            ref={register({
              required: "Username is required",
              minLength: {
                value: 4,
                message: "At least 4 characters required.",
              },
            })}
          />
        </FormControl>
      </Box>
    );
  };

  const UserFormPasswordField = () => {
    const { register, errors } = useFormContext<UserFormInputs>();
    return (
      <Box direction="column">
        <FormControl
          label="Password"
          helpText="Login password for the user."
          errorText={errors.password?.message}
          required
        >
          <TextField
            name="password"
            placeholder="Enter password"
            error={!!errors.password}
            ref={register({
              required: "Passsword is required",
              minLength: {
                value: 8,
                message: "At least 8 characters required.",
              },
            })}
          />
        </FormControl>
      </Box>
    );
  };

  const formMethods = useForm<UserFormInputs>({
    defaultValues: userFormDefaultValues,
    shouldUnregister: false,
    mode: "onBlur",
  });

  const dummytabs: ITabsProps[] = [
    "Very very long tab name",
    "dummy1",
    "dummy2",
    "dummy3",
    "dummy4",
    "dummy5",
    "dummy6",
    "dummy7",
    "dummy8",
    "dummy9",
    "dummy10",
    "dummy11",
    "dummy12",
    "dummy13",
    "dummy14",
    "dummy15",
    "dummy16",
    "dummy17",
    "dummy18",
  ].map((id, index) => ({
    id,
    label: `Tab ${id}`,
    defaultActive: index === 0,
    content: <Center>Content {id}</Center>,
    onActive: () => console.log(1),
    disabled: index === 2,
  }));
  const tabs: ITabsProps[] = [
    {
      id: "basicInfo",
      label: `Basic info`,
      defaultActive: true,
      content: (
        <Box direction="column">
          <UserFirstNameField />
          <UserLastNameField />
        </Box>
      ),
    },
    {
      id: "address",
      label: `Address`,
      defaultActive: false,
      content: (
        <Box direction="column">
          <AddressField i={1} />
          <AddressField i={2} />
        </Box>
      ),
    },
    ...dummytabs,
    {
      id: "contact",
      label: `Contact`,
      defaultActive: false,
      content: (
        <Box direction="column">
          <EmailField />
          <PhoneField />
        </Box>
      ),
    },
    {
      id: "credentials",
      label: `Credentials`,
      defaultActive: false,
      content: (
        <Box direction="column">
          <UserFormUsernameField />
          <UserFormPasswordField />
        </Box>
      ),
    },
  ];
  const [orientation, setOrientation] =
    useState<TabOrientationType>("vertical");
  const tabsForms: ITabFormProps = {
    formMethods: formMethods,
    tabs: tabs,
    orientation: orientation,
    fieldNames: {
      basicInfo: ["firstName", "lastName"],
      address: ["address"],
      contact: ["email", "phone"],
      credentials: ["username", "password"],
    },
  };

  const toggleOrientation = () => {
    if (orientation === "vertical") {
      setOrientation("horizontal");
    } else {
      setOrientation("vertical");
    }
  };

  return (
    <PageView
      heading="Tabs component"
      caption={"Testing tabs on page view"}
      actions={
        <Button
          value={` Set ${
            orientation === "horizontal" ? "vertical" : "horizontal"
          }`}
          onClick={() => {
            toggleOrientation(); //Close the summary view otherwise it will go on infinite render due to duplicate form.
          }}
        />
      }
      tabs={tabsForms}
    ></PageView>
  );
};

export default Page;