import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@/rematch/store';

const HookDemo = () => {
  const dispatch: Dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.demo.count);

  const add = useCallback(() => {
    dispatch.demo.set({
      count: count + 1,
    });
  }, [count, dispatch]);

  const sub = useCallback(() => {
    dispatch.demo.set({
      count: count - 1,
    });
  }, [count, dispatch]);
  return (
    <div>
      <div>
        <div onClick={add}>+</div>
      </div>
      <div>
        <div style={{ textAlign: 'center' }}>{count}</div>
      </div>
      <div>
        <div onClick={sub}>-</div>
      </div>
    </div>
  );
};

export default HookDemo;
