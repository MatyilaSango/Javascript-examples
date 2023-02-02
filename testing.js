let myname = "sango"
const regex = "/^[a-zA-Z]+$/"
console.log(regex.test(myname))


const useSemiPersistentState = (key, initialState) => {

  const isMounted = React.useRef(false);


  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {

    if (!isMounted.current) {
      isMounted.current = true;
    } else {

      console.log('A');
      localStorage.setItem(key, value);

    }

  }, [value, key]);

  return [value, setValue];
};
