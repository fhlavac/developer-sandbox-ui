import { ButtonVariant } from '@patternfly/react-core/dist/dynamic/components/Button';
import { Card } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardBody } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardFooter } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardHeader } from '@patternfly/react-core/dist/dynamic/components/Card';
import { Text } from '@patternfly/react-core/dist/dynamic/components/Text';
import { TextContent } from '@patternfly/react-core/dist/dynamic/components/Text';
import { TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text';
import * as React from 'react';
import AnalyticsButton from '../AnalyticsButton/AnalyticsButton';

type Props = {
  title: string;
  subtitle: string;
  description: string;
  iconUrl: string;
  learnMoreUrl: string;
  launchUrl?: string;
};

const ServiceCard = ({ title, subtitle, description, iconUrl, learnMoreUrl, launchUrl }: Props) => (
  <Card className="pf-u-h-100">
    <CardHeader>
      <img src={iconUrl} style={{ width: 48 }} className="pf-u-mr-md" />
      <TextContent>
        <Text component={TextVariants.h2}>{title}</Text>
        {subtitle}
      </TextContent>
    </CardHeader>
    <CardBody>{description}</CardBody>
    <CardFooter>
      {launchUrl ? (
        <AnalyticsButton
          component="a"
          href={launchUrl}
          className="pf-u-mr-md"
          target="_blank"
          rel="noopener"
          analytics={{
            event: 'DevSandbox Service Launch',
            properties: {
              name: `${title} ${subtitle}`,
              url: launchUrl,
            },
          }}
        >
          Launch
        </AnalyticsButton>
      ) : null}
      <AnalyticsButton
        variant={ButtonVariant.link}
        component="a"
        href={learnMoreUrl}
        target="_blank"
        rel="noopener"
        isInline
        analytics={{
          event: 'DevSandbox Service Learn',
          properties: {
            name: `${title} ${subtitle}`,
            url: learnMoreUrl,
          },
        }}
      >
        Learn more
      </AnalyticsButton>
    </CardFooter>
  </Card>
);

export default ServiceCard;
