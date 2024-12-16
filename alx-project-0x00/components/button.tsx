import { ButtonProps } from "@/interfaces"; 

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const shapeClasses = {
    'rounded-sm': "rounded-sm",
    'rounded-md': "rounded-md",
    'rounded-full': "rounded-full",
  };

  const buttonClasses = `${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 transition-all`;

  return (
    <button className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;
