import { TableHeader } from '../tableHeader';
import { TableRow } from '../tableRow';
import { FormattedData } from '../../types';
import { Button } from '../../types';

type Props = {
  data: FormattedData[];
  handleSort: (key: keyof FormattedData) => void;
};

export const Table = ({ data, handleSort }: Props) => {
  const getRandomButtonType = () =>
    Math.random() < 0.5 ? Button.RESULTS : Button.FINALIZE;

  return (
    <table>
      <TableHeader handleSort={handleSort} />
      <tbody>
      {data.map((item) => (
        <TableRow
          key={item.id}
          item={item}
          buttonType={getRandomButtonType()}
        />
      ))}
      </tbody>
    </table>
  );
};