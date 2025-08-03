import css from './loader.module.css'
export const Loader = () => {
    return (
        <div className='absolute z-2 top-[40%] left-[45%]'>
            <span className={css.loader}></span>
        </div>
    );
};
