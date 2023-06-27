

const LoadingBars = () => {
  return (
		<div className="flex items-center justify-center h-screen">
			<span className="loading loading-bars text-primary loading-xs"></span>
			<span className="loading loading-bars text-primary loading-sm"></span>
			<span className="loading loading-bars text-primary loading-md"></span>
			<span className="loading loading-bars text-primary loading-lg"></span>
		</div>
	);
}

export default LoadingBars