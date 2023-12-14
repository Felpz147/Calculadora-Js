using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class SceneTransition : MonoBehaviour
{
    public Image transitionImage;
    public float transitionSpeed = 1.0f;

    void Start()
    {
        // Ensure the transition image is fully visible at the beginning
        transitionImage.color = new Color(0, 0, 0, 1);
        StartCoroutine(StartTransition());
    }

    IEnumerator StartTransition()
    {
        yield return new WaitForSeconds(1.0f); // Optional delay before the transition

        float t = 1.0f;

        while (t > 0.0f)
        {
            t -= Time.deltaTime * transitionSpeed;
            transitionImage.color = new Color(0, 0, 0, t);
            yield return null;
        }

        // Load the next scene
        SceneManager.LoadScene("YourNextSceneName");
    }
}
