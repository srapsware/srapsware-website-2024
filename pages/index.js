import Link from 'next/link';
import { withTranslation } from '../i18n';

function IndexPage({ t }) {
  return (
    <div>
      <h1>Index page</h1>

      <br />
      <h1>{t('Title Text')} </h1>
    </div>
  );
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(IndexPage);
