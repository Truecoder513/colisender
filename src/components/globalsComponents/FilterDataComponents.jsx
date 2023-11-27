import { useState } from "react";
import { FormField } from "../../kits/kits";
import { handleFormData } from "../../utils/helpers";
import { Form, Formik } from "formik";

const fields = [
  {
    type: "text",
    name: "searchText",
    placeholder: "Rechercher ",
  },
  {
    type: "date",
    name: "date",
    placeholder: "Trier par départ",
  },
  {
    type: "text",
    name: "departuePlace",
    placeholder: "Lieu départ",
  },
  {
    type: "number",
    name: "budjet",
    placeholder: "Trier par budjet",
  },
  {
    type: "reactSelect",
    name: "traficType",
    placeholder: "Trier par trafique",
    options: [
      { value: "train", label: "Train" },
      { value: "avion", label: "Avion" },
    ],
  },
];
const FilterDataComponents = () => {
  const [filterParams, setFilterParams] = useState({
    searchText: "",
    date: "",
    departuePlace: "",
    budjet: "",
    traficType: "",
  });
  return (
    <div className="filterData">
      <Formik>
        <Form>
          {fields.map((field) =>
            FormField(
              field,
              (e) => handleFormData(e, setFilterParams, field.name),
              filterParams
            )
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default FilterDataComponents;
