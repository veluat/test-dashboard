import { FormattedData } from '../../types';
import { ButtonLink } from '../buttonLink';
import { Button, Type, Status } from '../../types';
import styles from './TableRow.module.scss';

type Props = {
  item: FormattedData;
  buttonType: Button;
};

export const TableRow = ({ item, buttonType }: Props) => {
  const { id, name, type, status, siteUrl } = item;

  const actionUrl = buttonType === Button.FINALIZE ? `/finalize/${id}` : `/results/${id}`;

  const getTypeDisplay = (type: Type) => {
    switch (type) {
      case Type.CLASSIC:
        return <span className={styles.classic}>Classic</span>;
      case Type.SERVER_SIDE:
        return <span className={styles.serverSide}>Server-side</span>;
      case Type.MVT:
        return <span className={styles.mvt}>MVT</span>;
      default:
        return type;
    }
  };

  const getStatusDisplay = (status: Status) => {
    switch (status) {
      case Status.DRAFT:
        return <span className={styles.draft}>Draft</span>;
      case Status.ONLINE:
        return <span className={styles.online}>Online</span>;
      case Status.PAUSED:
        return <span className={styles.paused}>Paused</span>;
      case Status.STOPPED:
        return <span className={styles.stopped}>Stopped</span>;
      default:
        return status;
    }
  };

  return (
    <tr className={styles.root} key={id}>
      <td className={styles.name}>{name}</td>
      <td className={styles.type}>{getTypeDisplay(type)}</td>
      <td className={styles.status}>{getStatusDisplay(status)}</td>
      <td className={styles.site}>{siteUrl}</td>
      <td>
        <ButtonLink
          to={actionUrl}
          text={buttonType === Button.RESULTS ? 'Results' : 'Finalize'}
          color={buttonType === Button.RESULTS ? 'results' : 'finalize'}
        />
      </td>
    </tr>
  );
};