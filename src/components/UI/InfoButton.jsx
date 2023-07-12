import { Menu, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';

export default function InfoButton(props) {
  return (
    <Menu as='div' className="relative">
      <Menu.Button>
        <div className="p-2 rounded-full hover:bg-white/30 cursor-pointer transition-all ease-in-out duration-150">
          <Icon icon={props.icon} color="white" width="28" />
        </div>

      </Menu.Button>
      <Transition
        as='fragment'
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="fixed"
      >
        <Menu.Items className="absolute top-12 transform -translate-x-full flex items-center justify-end">
          <Menu.Item className="text-white">
            {({ active }) => (
              <div className='w-[300px] p-5 bg-violet-950/60 backdrop-blur-xl rounded-xl border-[#757575] border shadow-2xl shadow-black/60'>
                <div className='text-center'>Upcoming updates will bring location customization.</div>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
