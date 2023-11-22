export const handleFormData = (e, setter, selectName, array = false) => {
  if (array) {
    try {
      const { name, value, type } = e.target;
      setter((prev) => {
        const lastIndex = prev.length - 1;
        if (lastIndex >= 0) {
          const updatedLastItem = { ...prev[lastIndex] };
          if (type === "file") {
            updatedLastItem[name] = e.target.files[0];
          } else {
            updatedLastItem[name] = value;
          }
          return [...prev.slice(0, lastIndex), updatedLastItem];
        }
        return prev;
      });
    } catch (err) {
      setter((prev) => {
        const lastIndex = prev.length - 1;
        if (lastIndex >= 0) {
          const updatedLastItem = { ...prev[lastIndex] };
          updatedLastItem[selectName] = e;
          return [...prev.slice(0, lastIndex), updatedLastItem];
        }
        return prev;
      });
    }
  } else {
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
  }
};
