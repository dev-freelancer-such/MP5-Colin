import { Skeleton } from 'antd';
import { isEmpty } from 'lodash';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import './breadcrumb.scss';
import Typography from '../Typography';

function HeaderBreadcrumb() {
  const { header, breadcrumb, isLoading } = useBreadcrumb();

  console.log('isLoading', isLoading);

  if (isLoading) {
    return (
      <div className="header-breadcrumb">
        <Skeleton.Button active className="header-breadcrumb__page" />

        <div className="header-breadcrumb__container--item">
          {Array(3)
            ?.fill(0)
            ?.map((_, index: number) => (
              <div key={index}>
                <Skeleton.Button active />
                {index < 2 && (
                  <span key={index} style={{ margin: '0 8px' }}>
                    {'>'}
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="header-breadcrumb">
      {header && (
        <Typography fontWeight="bold" variant="body1">
          {header}
        </Typography>
      )}

      {!isEmpty(breadcrumb) && (
        <div className="header-breadcrumb__container">
          {breadcrumb?.map((item, index: number) => (
            <div key={item?.key} className="header-breadcrumb__container--item">
              <Typography
                className={
                  item?.path
                    ? 'header-breadcrumb__path'
                    : 'header-breadcrumb__label'
                }
                variant="body2"
              >
                {item?.label}
              </Typography>

              {index < breadcrumb.length - 1 && <span> {'>'} </span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HeaderBreadcrumb;
