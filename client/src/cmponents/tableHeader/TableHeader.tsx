import {FormattedData} from '../../types'

type Props = {
  handleSort: (key: keyof FormattedData) => void;
};

export const TableHeader = ({ handleSort }: Props) => {
  return (
    <thead>
    <tr>
      <td>
        <p onClick={() => handleSort('name')}>NAME</p>
      </td>
      <td>
        <p onClick={() => handleSort('type')}>TYPE</p>
      </td>
      <td>
        <p onClick={() => handleSort('status')}>STATUS</p>
      </td>
      <td>
        <p onClick={() => handleSort('siteUrl')}>SITE</p>
      </td>
      <td></td>
    </tr>
    </thead>
  );
};