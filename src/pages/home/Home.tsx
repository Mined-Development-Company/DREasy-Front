import { Header } from '../../components';
import { CurrencyInput } from '../../forms/CurrencyInput';
import { DateInput } from '../../forms/DateInput';
import { Option, Select } from '../../forms/Select';

export const Home = () => {
  return (
    <div>
      <Header />
      
      <CurrencyInput />

      <DateInput />

      <Select>
        <Option value="a">opt a</Option>
        <Option value="b">opt b</Option>
        <Option value="c">opt c</Option>
        <Option value="d">opt d</Option>
        <Option value="e">opt e</Option>
        <Option value="f">opt f</Option>
        <Option value="g">opt g</Option>
        <Option value="h">opt h</Option>
        <Option value="i">opt i</Option>
        <Option value="j">opt j</Option>
        <Option value="k">opt k</Option>
      </Select>
    </div>
  );
};
