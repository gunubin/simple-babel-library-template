/* @flow */

type Props = {
  message1: string,
  message2: string,
};

const helloWorld = (props: Props) => {
  // eslint-disable-next-line no-console
  return `${props.message1} ${props.message2}`;
};

export default helloWorld;
