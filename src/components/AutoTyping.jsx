import { TypeAnimation } from 'react-type-animation';
 
export const AutoTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        'My Name is Ikhwan', // Types 'One'
        1500, // Waits 1s
        "I'm Frontend Developer", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "I Like Technology",
        2000, // Types 'Three' without deleting 'Two'
        "And Enthusiastic in Web3",
        2000, // Types 'Three' without deleting 'Two'
        () => {
            
        },
      ]}
      wrapper="span"
      speed={40}
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block', fontWeight: '300' }}
    />
  );
};