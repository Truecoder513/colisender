export const handleFormData = (e, setter, selectName) => {
  try {
    const { name, value, type } = e.target;
    if (type === "file") {
      setter((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setter((prev) => ({ ...prev, [name]: value }));
    }
  } catch (err) {
    setter((prev) => ({
      ...prev,
      [selectName]: e,
    }));
  }
};
