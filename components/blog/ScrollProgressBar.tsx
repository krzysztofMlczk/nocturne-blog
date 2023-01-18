interface ScrollProgressBarProps {
  progress: number;
}

export function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div className='fixed top-[75px] lg:top-0 left-0 h-[3px] lg:h-[5px] w-[100vw] z-10'>
      <div
        className='bg-supernova h-full'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
