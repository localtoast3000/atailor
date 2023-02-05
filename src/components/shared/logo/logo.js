import Image from 'next/image';

export default function Logo({ className }) {
  return (
    <Image
      src='/images/Logo.png'
      alt='atailor logo'
      width='100'
      height='30'
      className={`${className}`}
    />
  );
}
