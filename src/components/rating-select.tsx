import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface RatingSelectProps {
  selected: number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RatingSelect: React.FC<RatingSelectProps> = ({
  selected,
  handleChange,
}) => {
  return (
    <>
      <div className='flex'>
        <div className='flex items-center justify-center w-full'>
          <Input
            type='radio'
            name='rating'
            id='num1'
            value='1'
            className='peer hidden'
            onChange={handleChange}
            checked={selected === 1}
          />
          <Label
            htmlFor='num1'
            className='block cursor-pointer select-none rounded flex-grow p-4 text-center peer-checked:bg-primary  peer-checked:text-white'
          >
            1
          </Label>
        </div>
        <div className='flex items-center justify-center w-full'>
          <Input
            type='radio'
            name='rating'
            id='num2'
            value='2'
            className='peer hidden'
            onChange={handleChange}
            checked={selected === 2}
          />
          <Label
            htmlFor='num2'
            className='block cursor-pointer select-none rounded flex-grow p-4 text-center peer-checked:bg-primary  peer-checked:text-white'
          >
            2
          </Label>
        </div>
        <div className='flex items-center justify-center w-full'>
          <Input
            type='radio'
            name='rating'
            id='num3'
            value='3'
            className='peer hidden'
            onChange={handleChange}
            checked={selected === 3}
          />
          <Label
            htmlFor='num3'
            className='block cursor-pointer select-none rounded flex-grow p-4 text-center peer-checked:bg-primary  peer-checked:text-white'
          >
            3
          </Label>
        </div>
        <div className='flex items-center justify-center w-full'>
          <Input
            type='radio'
            name='rating'
            id='num4'
            value='4'
            className='peer hidden'
            onChange={handleChange}
            checked={selected === 4}
          />
          <Label
            htmlFor='num4'
            className='block cursor-pointer select-none rounded flex-grow p-4 text-center peer-checked:bg-primary  peer-checked:text-white'
          >
            4
          </Label>
        </div>
        <div className='flex items-center justify-center w-full'>
          <Input
            type='radio'
            name='rating'
            id='num5'
            value='5'
            className='peer hidden'
            onChange={handleChange}
            checked={selected === 5}
          />
          <Label
            htmlFor='num5'
            className='block cursor-pointer select-none rounded flex-grow p-4 text-center peer-checked:bg-primary  peer-checked:text-white'
          >
            5
          </Label>
        </div>
      </div>
    </>
  );
};

export default RatingSelect;
