//Tests that the Form function renders the form with default values
import Form from "../components/Form"
it('test_rendering_form_with_default_values', () => {
    const post = {
        prompt: '',
        tag: ''
    }
    const type = 'Test'
    const setPost = jest.fn()
    const submitting = false
    const handleSubmit = jest.fn()
    const wrapper = shallow(<Form post={post} type={type} setPost={setPost} submitting={submitting} handleSubmit={handleSubmit} />)
    expect(wrapper.find('textarea').prop('value')).toEqual('')
    expect(wrapper.find('input').prop('value')).toEqual('')
})

//Tests that the prompt textarea updates the post state correctly when typing
it('test_typing_in_prompt_textarea', () => {
    const setPost = jest.fn();
    const post = { prompt: '', tag: '' };
    const wrapper = shallow(<Form post={post} type='Create' setPost={setPost} submitting={false} handleSubmit={() => {}} />);
    const promptTextarea = wrapper.find('textarea');
    promptTextarea.simulate('change', { target: { value: 'New prompt' } });
    expect(setPost).toHaveBeenCalledWith({ ...post, prompt: 'New prompt' });
});

