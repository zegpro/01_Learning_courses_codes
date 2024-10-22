import React from "react";
import {
  FiBell,
  FiDownload,
  FiEdit,
  FiSave,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { SiAirbnb } from "react-icons/si";

export const TailwindTips = () => {
  return (
    <div className="relative grid h-screen w-full place-content-center bg-violet-600 p-4">
      <DividerExample />
      {/* <ScrollSnapExample /> */}
      {/* <SROnlyExample /> */}
      {/* <AccentColorExample /> */}
      {/* <CaretAndOutlineExample /> */}
      {/* <GradientStuff /> */}
      {/* <AnimationExample /> */}
      {/* <SpaceBetweenExample /> */}
    </div>
  );
};

const DividerExample = () => {
  return (
    <div className="flex divide-x divide-violet-600 overflow-hidden rounded-lg bg-white text-neutral-900">
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-violet-100">
        <span>Edit</span>
        <FiEdit />
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-violet-100">
        <span>Save</span>
        <FiSave />
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-violet-100">
        <span>Export</span>
        <FiDownload />
      </button>
    </div>
  );
};

const ScrollSnapExample = () => {
  return (
    <div className="flex w-full snap-x items-center gap-4 overflow-x-scroll rounded-lg bg-white p-4">
      <div className="h-auto w-72 shrink-0 snap-center rounded-full">
        <img
          alt="I'm too lazy for this..."
          className="rounded-lg shadow"
          src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        />
      </div>
      <div className="h-auto w-72 shrink-0 snap-center rounded-full">
        <img
          alt="I'm too lazy for this..."
          className="rounded-lg shadow"
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        />
      </div>
      <div className="h-auto w-72 shrink-0 snap-center rounded-full">
        <img
          alt="I'm too lazy for this..."
          className="rounded-lg shadow"
          src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        />
      </div>
      <div className="h-auto w-72 shrink-0 snap-center rounded-full">
        <img
          alt="I'm too lazy for this..."
          className="rounded-lg shadow"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        />
      </div>
      <div className="h-auto w-72 shrink-0 snap-center rounded-full">
        <img
          alt="I'm too lazy for this..."
          className="rounded-lg shadow"
          src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        />
      </div>
      <div className="h-auto w-72 shrink-0 snap-center rounded-full">
        <img
          alt="I'm too lazy for this..."
          className="rounded-lg shadow"
          src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        />
      </div>
    </div>
  );
};

const SROnlyExample = () => {
  return (
    <div className="flex h-12 w-72 items-center justify-between rounded-lg bg-white px-4">
      <SiAirbnb className="text-2xl" />

      <div className="flex gap-4">
        <button>
          <FiSettings />
          <span className="sr-only">Settings</span>
        </button>
        <button>
          <FiUser />
          <span className="sr-only">Account</span>
        </button>
      </div>
    </div>
  );
};

const AccentColorExample = () => {
  return (
    <div className="grid h-32 w-32 place-content-center rounded-lg bg-white">
      <input className="h-8 w-8 accent-violet-600" type="checkbox" />
    </div>
  );
};

const CaretAndOutlineExample = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <textarea
        className="h-24 w-72 p-2 caret-violet-600 outline-violet-600"
        placeholder="I'm still too lazy for this..."
      />
    </div>
  );
};

const GradientStuff = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <div
        className={`
    h-12 w-72 rounded-lg bg-gradient-to-r
    from-red-300 from-30% via-blue-300 via-70% to-yellow-300 to-90%
  `}
      />
    </div>
  );
};

const AnimationExample = () => {
  return (
    <div className="flex h-12 w-72 items-center justify-between rounded-lg bg-white px-4">
      <SiAirbnb className="text-2xl" />

      <button className="relative">
        <FiBell />
        <span className="sr-only">Notifications</span>

        <span className="absolute -top-1 right-0 h-2 w-2 animate-ping rounded-full bg-red-500" />
      </button>
    </div>
  );
};

const SpaceBetweenExample = () => {
  return (
    <div className="w-screen max-w-xl space-y-2 rounded-lg bg-white p-4">
      <h1 className="text-2xl font-semibold">Skibbidy boop</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam
        molestiae cumque tempora recusandae ipsum praesentium et numquam id
        accusamus?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo porro
        rerum odio beatae accusantium laudantium praesentium maxime eaque
        voluptate aliquid, doloribus tempora corporis blanditiis dolore
        doloremque, mollitia id reprehenderit dignissimos. Ducimus vero corrupti
        quae ipsa!
      </p>
    </div>
  );
};
