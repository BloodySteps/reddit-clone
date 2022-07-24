import { useState } from 'react';
import { Modal, Button, Group, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        centered
        transition="slide-up"
        transitionDuration={500}
        transitionTimingFunction="ease"
      >
        <ScrollArea style={{ height: 350 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          labore, laborum necessitatibus, iure odio laboriosam et dicta deserunt
          aliquam praesentium facere dolore explicabo veritatis ipsum
          consequuntur. Rem delectus eos nulla? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Omnis, labore, laborum necessitatibus,
          iure odio laboriosam et dicta deserunt aliquam praesentium facere
          dolore explicabo veritatis ipsum consequuntur. Rem delectus eos nulla?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          labore, laborum necessitatibus, iure odio laboriosam et dicta deserunt
          aliquam praesentium facere dolore explicabo veritatis ipsum
          consequuntur. Rem delectus eos nulla? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Omnis, labore, laborum necessitatibus,
          iure odio laboriosam et dicta deserunt aliquam praesentium facere
          dolore explicabo veritatis ipsum consequuntur. Rem delectus eos nulla?
        </ScrollArea>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export default Demo;
