import React from "react";
import { TextField, ITextFieldProps } from "@faharmony/form";
import { Text } from "@faharmony/components";
import { faHeart } from "@faharmony/icons";
import { SMLType, Box } from "@faharmony/theme";
import { PageView } from "@faharmony/views";

const sizes: SMLType[] = ["sm", "md", "lg"];

const options: { [name: string]: ITextFieldProps } = {
  default: {},
  withText: { defaultValue: "Default text" },
  withPrefixIcon: { placeholder: "Favorite hobby", prefixIcon: faHeart },
  readOnly: { defaultValue: "Read only name", readOnly: true },
  disabled: { defaultValue: "Disabled text", disabled: true },
  successStatus: {
    success: true,
    defaultValue: "101.00",
    prefixText: "€",
  },
  errorStatus: {
    error: true,
    defaultValue: "101a",
    prefixText: "EUR",
  },
  loading: { isLoading: true, defaultValue: "Siddhant Gupta" },
};

const Page = () => (
  <PageView heading="TextField" overflow="auto">
    <Box direction="column">
      <Box>
        <Text value="Type" truncate variant="h5" align="right" />
        <Text value="Small (sm)" truncate variant="h5" />
        <Text value="Medium (md, default)" truncate variant="h5" />
        <Text value="Large (lg)" truncate variant="h5" />
      </Box>
      {Object.entries(options).map(([name, o]) => (
        <Box key={name}>
          <Text truncate value={name} align="right" />
          {sizes.map((s) => (
            <TextField spacing={s} key={name + s} {...o} ref={null} />
          ))}
        </Box>
      ))}
    </Box>
  </PageView>
);

export default Page;