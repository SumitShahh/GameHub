import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
